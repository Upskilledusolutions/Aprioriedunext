import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../src/Store";

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKENDURL;

export default function EnglishAptitudeRouteGuard({ children }) {
  const router = useRouter();
  const dispatch = useDispatch();
  const { user, isAuthenticated } = useSelector((state) => state.auth);
  const hasIdentity = Boolean(isAuthenticated && user?.userId);
  const [status, setStatus] = useState("checking");

  useEffect(() => {
    if (!router.isReady) return;

    if (!hasIdentity) {
      let savedUser = null;
      try {
        const savedUserText = Cookies.get("user");
        savedUser = savedUserText ? JSON.parse(savedUserText) : null;
      } catch {
        savedUser = null;
      }

      // AuthInitializer restores a valid saved user into Redux. If no saved
      // user exists, send the visitor to the existing login page immediately.
      if (!savedUser?.userId) {
        setStatus("redirecting");
        router.replace("/Auth");
      }
      return;
    }

    let cancelled = false;
    setStatus("checking");

    async function verifyActiveSession() {
      if (!BACKEND_URL) throw new Error("Backend URL is not configured.");
      const baseUrl = BACKEND_URL.endsWith("/") ? BACKEND_URL.slice(0, -1) : BACKEND_URL;
      const response = await fetch(baseUrl + "/api/check-status", {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId: user.userId }),
      });
      const result = await response.json().catch(() => null);
      if (!response.ok || result?.success !== true || result?.user?.active !== true) {
        throw new Error("The login session is not active.");
      }
      if (!cancelled) setStatus("allowed");
    }

    verifyActiveSession().catch(() => {
      if (cancelled) return;
      dispatch(logout());
      setStatus("redirecting");
      router.replace("/Auth");
    });

    return () => {
      cancelled = true;
    };
  }, [router.isReady, router, hasIdentity, user?.userId, dispatch]);

  if (status !== "allowed") return null;
  return children;
}
