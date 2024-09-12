import { SitemapStream, streamToPromise } from 'sitemap';
import { Readable } from 'stream';
import data from '../../Data/frenchquestions'; // Adjust the path if necessary

export default async (req, res) => {
  try {
    // Define your static URLs
    const staticLinks = [
      { url: '/', changefreq: 'daily', priority: 1.0 },
      { url: '/About', changefreq: 'monthly', priority: 0.8 },
      { url: '/ContactUs', changefreq: 'monthly', priority: 0.8 },
      { url: '/Courses', changefreq: 'monthly', priority: 0.8 },
      { url: '/Event', changefreq: 'monthly', priority: 0.8 },
      { url: '/Eventspage', changefreq: 'monthly', priority: 0.8 },
      { url: '/LanguageClub', changefreq: 'monthly', priority: 0.8 },
      { url: '/Olympiad', changefreq: 'monthly', priority: 0.8 },
      { url: '/Practicetest', changefreq: 'monthly', priority: 0.8 },
      { url: '/QuizTime', changefreq: 'monthly', priority: 0.8 },
      { url: '/ReadingClub', changefreq: 'monthly', priority: 0.8 },
      { url: '/Readnow', changefreq: 'monthly', priority: 0.8 },
      { url: '/SpeakingSkills', changefreq: 'monthly', priority: 0.8 },
      { url: '/Testimonials', changefreq: 'monthly', priority: 0.8 },
      { url: '/TrialTest', changefreq: 'monthly', priority: 0.8 },
      { url: '/WritingClub', changefreq: 'monthly', priority: 0.8 },
    ];

    // Map dynamic routes from JSON data
    const dynamicLinks = [
      ...artworks.map(art => ({
        url: `/QuizTime/FrenchQuiz/${data.quiz}`, // Adjust URL structure as needed
        changefreq: 'weekly',
        priority: 0.6,
      })),
    ];

    // Combine static and dynamic links
    const links = [...staticLinks, ...dynamicLinks];

    // Create and generate sitemap
    const stream = new SitemapStream({ hostname: `https://${req.headers.host}` });
    const xmlString = await streamToPromise(Readable.from(links).pipe(stream)).then(data => data.toString());

    res.setHeader('Content-Type', 'application/xml');
    res.status(200).end(xmlString);
  } catch (error) {
    console.error('Error generating sitemap:', error);
    res.status(500).json({ error: 'Failed to generate sitemap' });
  }
};