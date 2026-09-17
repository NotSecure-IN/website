import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://notsecure.in';
  const lastModified = new Date();

  return [
    { url: baseUrl, lastModified, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${baseUrl}/about`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/product`, lastModified, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/service`, lastModified, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/pricing`, lastModified, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/contact`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/research`, lastModified, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${baseUrl}/research/whitepaper`, lastModified, changeFrequency: 'yearly', priority: 0.6 },
    { url: `${baseUrl}/vdp`, lastModified, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/career`, lastModified, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${baseUrl}/testimonial`, lastModified, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${baseUrl}/privacypolicy`, lastModified, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${baseUrl}/termscondition`, lastModified, changeFrequency: 'yearly', priority: 0.3 },
  ];
}