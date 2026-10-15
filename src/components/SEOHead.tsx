import { useEffect } from 'react';
import { PageSEO, PRODUCTION_DOMAIN } from '../config/seo';
import { getPageImage } from '../config/images';

interface SEOHeadProps {
  seo: PageSEO;
}

export default function SEOHead({ seo }: SEOHeadProps) {
  useEffect(() => {
    // 1. Update Document Title
    document.title = seo.title;

    // 2. Helper to set or create meta tag
    const setMeta = (nameAttr: 'name' | 'property', attrValue: string, content: string) => {
      let element = document.querySelector(`meta[${nameAttr}="${attrValue}"]`) as HTMLMetaElement | null;
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(nameAttr, attrValue);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // 3. Meta Description (Meta keywords omitted per Google SEO guidelines)
    setMeta('name', 'description', seo.metaDescription);
    setMeta('name', 'robots', 'index, follow');

    // Remove legacy meta keywords if present in DOM
    const existingKeywords = document.querySelector('meta[name="keywords"]');
    if (existingKeywords) {
      existingKeywords.remove();
    }

    // 4. Canonical URL
    const canonicalHref = seo.path === '/' ? `${PRODUCTION_DOMAIN}/` : `${PRODUCTION_DOMAIN}${seo.path}`;
    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonicalHref);

    // 5. OpenGraph Tags
    const imageConfig = getPageImage(seo.imageKey);
    const imageUrl = `${PRODUCTION_DOMAIN}${imageConfig.src}`;

    setMeta('property', 'og:title', seo.title);
    setMeta('property', 'og:description', seo.metaDescription);
    setMeta('property', 'og:type', seo.type === 'article' ? 'article' : 'website');
    setMeta('property', 'og:url', canonicalHref);
    setMeta('property', 'og:image', imageUrl);
    setMeta('property', 'og:image:alt', imageConfig.alt);
    setMeta('property', 'og:site_name', 'Budget Respawn');

    // 6. Twitter Card Tags
    setMeta('name', 'twitter:card', 'summary_large_image');
    setMeta('name', 'twitter:title', seo.title);
    setMeta('name', 'twitter:description', seo.metaDescription);
    setMeta('name', 'twitter:image', imageUrl);

    // 7. Inject JSON-LD Structured Data
    const scriptId = 'budget-respawn-jsonld';
    let scriptElement = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (!scriptElement) {
      scriptElement = document.createElement('script');
      scriptElement.id = scriptId;
      scriptElement.type = 'application/ld+json';
      document.head.appendChild(scriptElement);
    }

    const structuredData: Record<string, unknown>[] = [];

    // WebSite or CollectionPage
    if (seo.type === 'website') {
      structuredData.push({
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'Budget Respawn',
        url: PRODUCTION_DOMAIN,
        description: seo.metaDescription,
        publisher: {
          '@type': 'Organization',
          name: 'Budget Respawn',
          logo: {
            '@type': 'ImageObject',
            url: `${PRODUCTION_DOMAIN}/images/home-gaming-setup.jpg`,
          },
        },
      });
    }

    // Article Structured Data
    if (seo.type === 'article') {
      structuredData.push({
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: seo.h1,
        description: seo.metaDescription,
        image: imageUrl,
        datePublished: seo.publishDate || '2026-03-15',
        dateModified: seo.modifiedDate || '2026-10-12',
        author: {
          '@type': 'Organization',
          name: seo.author || 'Budget Respawn Hardware Lab',
        },
        publisher: {
          '@type': 'Organization',
          name: 'Budget Respawn',
          logo: {
            '@type': 'ImageObject',
            url: `${PRODUCTION_DOMAIN}/images/home-gaming-setup.jpg`,
          },
        },
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': canonicalHref,
        },
      });
    }

    // BreadcrumbList Structured Data
    if (seo.breadcrumbs && seo.breadcrumbs.length > 0) {
      structuredData.push({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: seo.breadcrumbs.map((crumb, idx) => ({
          '@type': 'ListItem',
          position: idx + 1,
          name: crumb.name,
          item: crumb.item.startsWith('http') ? crumb.item : `${PRODUCTION_DOMAIN}${crumb.item}`,
        })),
      });
    }

    // FAQPage Structured Data if present
    if (seo.faqs && seo.faqs.length > 0) {
      structuredData.push({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: seo.faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer,
          },
        })),
      });
    }

    scriptElement.textContent = JSON.stringify(structuredData);
  }, [seo]);

  return null;
}
