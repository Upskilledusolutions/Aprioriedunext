import React, { useState } from "react";
import jsPDF from "jspdf";
import "jspdf-autotable";
import styles from "@/styles/Payslip.module.css";

const Payslip = () => {
    const [formData, setFormData] = useState({
        name: "",
        employeeId: "",
        designation: "",
        department: "",
        dateOfJoining: "",
        pan: "",
        daysPayable: "",
        unpaidLeave: "",
        leavesTaken: "",
        payslipMonth: "2025-04",
        grossSalary: "",
        basic: "",
        specialAllowance: "",
        bonus: "",
        employeePF: "",
        incomeTax: "",
        otherDeductions: "",
        daysLOP: "",
        bankName: "",
        bankAccountNo: "",
        uan: "",
      });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const formatAmount = (amount) => {
    const num = Number(amount || 0);
    return `Rs. ${num.toLocaleString("en-IN", {
      minimumFractionDigits: 2,
    })}`;
  };

  const downloadPayslip = (e) => {
    e.preventDefault();
    const doc = new jsPDF({ unit: "pt", format: "a4" });
    const w = doc.internal.pageSize.width;
    let y = 40;

    // HEADER (hard-coded)
    doc.addImage("/newlogo1.png", "PNG", 40, y, 60, 60);
    doc.setFont("Helvetica", "bold").setFontSize(20);
    doc.text("Upskilledu Solutions", w / 2, y + 20, { align: "center" });
    doc.setFont("Helvetica", "normal").setFontSize(10);
    [
      "E 200, Lajpat Nagar, Part 1,",
      "New Delhi - 110024,",
      "Delhi, India",
    ].forEach((line, i) =>
      doc.text(line, w / 2, y + 40 + i * 12, { align: "center" })
    );
    y += 100;

    // TITLE BAR
    const monthLabel = `Payslip for the month of ${new Date(
      formData.payslipMonth
    ).toLocaleString("en", { month: "long", year: "numeric" })}`;
    doc.setFillColor("#001f3f");
    doc.rect(40, y - 18 + 6, w - 80, 18, "F");
    doc.setFont("Helvetica", "bold").setFontSize(14).setTextColor("#ffffff");
    doc.text(monthLabel, w / 2, y, { align: "center" });
    doc.setTextColor("#000000");
    y += 24;

    // EMPLOYEE DETAILS
    const leftX = 40;
    const rightX = w / 2 + 10;
    const labelW = 100;
    const lh = 18;
    const leftDetails = [
      ["Date", new Date().toLocaleDateString("en-GB")],
      ["Name", formData.name],
      ["Designation", formData.designation],
      ["Department", formData.department],
      ["Date of Joining", formData.dateOfJoining],
      ["Days Payable", formData.daysPayable],
      ["Unpaid Leave", formData.unpaidLeave],
      ["Leaves Taken", formData.leavesTaken],
    ];
    const rightDetails = [
      ["Employee Code", formData.employeeId],
      ["PAN No", formData.pan],
      ["Bank Name", formData.bankName],
      ["Bank A/C No.", formData.bankAccountNo],
      ["UAN", formData.uan],
      ["LOP Days", formData.daysLOP],
    ];

    doc.setFont("Helvetica", "bold").setFontSize(10);
    leftDetails.forEach(([label, value], i) => {
      const yy = y + i * lh;
      doc.text(`${label}:`, leftX, yy);
      doc.setFont("Helvetica", "normal").text(value, leftX + labelW, yy);
      doc.setFont("Helvetica", "bold");
    });
    rightDetails.forEach(([label, value], i) => {
      const yy = y + i * lh;
      doc.text(`${label}:`, rightX, yy);
      doc.setFont("Helvetica", "normal").text(value, rightX + labelW, yy);
      doc.setFont("Helvetica", "bold");
    });

    y += Math.max(leftDetails.length, rightDetails.length) * lh + 20;
    doc.setLineWidth(0.5).line(40, y, w - 40, y);
    y += 20;

    // EARNINGS & DEDUCTIONS
    const earnings = [
      ["Basic", formData.basic],
      ["Special Allowance", formData.specialAllowance],
      ["Bonus", formData.bonus],
      ["Total Gross Salary (CTC)", formData.grossSalary],
    ];
    const deductions = [
      ["Provident Fund", formData.employeePF],
      ["Income Tax", formData.incomeTax],
      ["Other Deductions", formData.otherDeductions],
    ];

    const rows = [];
    let totalE = 0,
      totalD = 0;
    const max = Math.max(earnings.length, deductions.length);
    for (let i = 0; i < max; i++) {
      const [eLabel, eAmt] = earnings[i] || ["", "0"];
      const [dLabel, dAmt] = deductions[i] || ["", "0"];
      rows.push([
        eLabel,
        eAmt !== "0" ? formatAmount(eAmt) : "",
        dLabel,
        dAmt !== "0" ? formatAmount(dAmt) : "",
      ]);
      totalE += parseFloat(eAmt);
      totalD += parseFloat(dAmt);
    }
    rows.push([
      "Total Earnings",
      formatAmount(totalE),
      "Total Deductions",
      formatAmount(totalD),
    ]);

    doc.autoTable({
      startY: y,
      theme: "grid",
      head: [[
        { content: "Earnings",   styles: { fillColor: "#001f3f", textColor: "#fff", fontStyle: "bold" } },
        { content: "Amount",     styles: { fillColor: "#001f3f", textColor: "#fff", fontStyle: "bold" } },
        { content: "Deductions", styles: { fillColor: "#001f3f", textColor: "#fff", fontStyle: "bold" } },
        { content: "Amount",     styles: { fillColor: "#001f3f", textColor: "#fff", fontStyle: "bold" } },
      ]],
      body: rows,
      styles: { font: "Helvetica", fontSize: 10, textColor: "#000" },
      columnStyles: { 1: { halign: "right" }, 3: { halign: "right" } },
      margin: { left: 40, right: 40 },
    });

    y = doc.lastAutoTable.finalY + 30;

    // NET PAY
    const netPay = (totalE - totalD).toFixed(2);
    const netPayText = `Net Pay for the Month: ${formatAmount(netPay)}`;
    doc.setFont("Helvetica", "bold").setFontSize(12);
    doc.text(netPayText, w / 2, y, { align: "center" });
    y += 30;

    // FOOTER
    doc.setFont("Helvetica", "normal").setFontSize(8);
    doc.text(
      "This is a system generated payslip and does not require signature.",
      w / 2,
      y,
      { align: "center" }
    );
    doc.text("Authorised Signatory (HR Department)", w / 2, y + 12, {
      align: "center",
    });
    doc.text("For more details, visit www.upskilleduonline.com", w / 2, y + 24, {
      align: "center",
    });

    doc.save(`Payslip-${formData.name}-${formData.payslipMonth}.pdf`);
  };

  return (
    <div className={styles.background} style={{ padding: 20 }}>
      <h1 className={styles.heading}>Payslip Form</h1>
      <form onSubmit={downloadPayslip} className={styles.form}>
        {Object.entries(formData).map(([key, val]) => (
          <div key={key} className={styles.containers} style={{ marginBottom: 10 }}>
            <label style={{ fontWeight: "bold" }}>
              {key.replace(/([A-Z])/g, " $1")}:{" "}
            </label>
            <input
              type="text"
              name={key}
              value={val}
              onChange={handleChange}
              className={styles.input}
              style={{ padding: 5, width: 300 }}
            />
          </div>
        ))}
        <button
          type="submit"
          className={styles.button}
          style={{
            padding: "10px 20px",
            backgroundColor: "#4CAF50",
            color: "white",
            border: "none",
            borderRadius: 5,
          }}
        >
          Generate Payslip
        </button>
      </form>
    </div>
  );
};

export default Payslip;
