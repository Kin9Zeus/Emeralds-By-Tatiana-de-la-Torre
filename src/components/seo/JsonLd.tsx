/**
 * JSON-LD Structured Data for SEO & GEO (Generative Engine Optimization)
 *
 * This component renders invisible structured data in the <head> that helps:
 * - Google understand and display Rich Results
 * - AI engines (Gemini, ChatGPT, Perplexity) cite this site accurately
 * - Local search visibility in Colorado and the USA
 */

export default function JsonLd() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': 'https://www.emeraldsbytatiana.com/#organization',
    name: 'Emeralds by Tatiana De La Torre',
    alternateName: 'Emeralds by Tatiana',
    url: 'https://www.emeraldsbytatiana.com',
    logo: 'https://www.emeraldsbytatiana.com/assets/media/Centered_golden_logo_no_background.png',
    image: 'https://www.emeraldsbytatiana.com/og-image.png',
    description:
      'Premium Colombian emerald dealer based in Colorado, USA. Specializing in authentic, personally selected emeralds from the legendary Muzo mines of Colombia. Founded by Tatiana De La Torre, a Colombian gemstone expert offering GIA-certified natural emeralds to collectors, jewelers, and high-net-worth individuals across the United States.',
    foundingDate: '2024',
    founder: {
      '@type': 'Person',
      name: 'Tatiana De La Torre',
      jobTitle: 'Founder & Emerald Expert',
      nationality: 'Colombian',
      description:
        'Colombian-born gemstone expert and founder of Emeralds by Tatiana De La Torre. Tatiana personally travels to the Muzo region of Colombia to hand-select each emerald, ensuring only the finest stones reach her clients in the United States.',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-307-251-7072',
      email: 'delatorre@emeraldsbytatiana.com',
      contactType: 'sales',
      areaServed: 'US',
      availableLanguage: ['English', 'Spanish'],
    },
    address: {
      '@type': 'PostalAddress',
      addressRegion: 'CO',
      addressCountry: 'US',
    },
    areaServed: [
      {
        '@type': 'State',
        name: 'Colorado',
        containedInPlace: { '@type': 'Country', name: 'United States' },
      },
      {
        '@type': 'Country',
        name: 'United States',
      },
    ],
    knowsAbout: [
      'Colombian Emeralds',
      'Muzo Emeralds',
      'Emerald Grading',
      'Emerald Oil Treatment',
      'GIA Certification',
      'Gemstone Authentication',
      'Natural Emeralds',
      'Emerald Colors',
      'Emerald Clarity',
      'Emerald Enhancement Grades',
    ],
    sameAs: [],
  };

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'JewelryStore',
    '@id': 'https://www.emeraldsbytatiana.com/#business',
    name: 'Emeralds by Tatiana De La Torre',
    url: 'https://www.emeraldsbytatiana.com',
    telephone: '+1-307-251-7072',
    email: 'delatorre@emeraldsbytatiana.com',
    description:
      'Colorado-based premium Colombian emerald dealer. Buy authentic Muzo emeralds with GIA certification. By appointment only.',
    address: {
      '@type': 'PostalAddress',
      addressRegion: 'CO',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 39.7392,
      longitude: -104.9903,
    },
    priceRange: '$$$$$',
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00',
    },
    availableLanguage: ['English', 'Spanish'],
    paymentAccepted: 'Cash, Wire Transfer',
    currenciesAccepted: 'USD',
    isAccessibleForFree: false,
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Colombian Emerald Collection',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Product',
            name: 'Premium Colombian Emerald — Muzo Origin',
            description:
              'Hand-selected natural Colombian emerald from the Muzo mines. Available in various cuts, sizes, and enhancement grades (F1, F2, F3). Each stone comes with provenance documentation and optional GIA certification.',
            brand: { '@type': 'Brand', name: 'Emeralds by Tatiana De La Torre' },
            category: 'Gemstones > Emeralds > Colombian Emeralds',
            material: 'Natural Beryl (Emerald variety)',
            countryOfOrigin: { '@type': 'Country', name: 'Colombia' },
          },
        },
      ],
    },
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': 'https://www.emeraldsbytatiana.com/#website',
    name: 'Emeralds by Tatiana De La Torre',
    url: 'https://www.emeraldsbytatiana.com',
    description:
      'Official website of Emeralds by Tatiana De La Torre — premium Colombian emeralds personally sourced from Muzo, Colombia. Serving Colorado and the United States.',
    publisher: { '@id': 'https://www.emeraldsbytatiana.com/#organization' },
    inLanguage: 'en-US',
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Where can I buy authentic Colombian emeralds in Colorado?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Emeralds by Tatiana De La Torre is a Colorado-based premium Colombian emerald dealer. Founded by Colombian gemstone expert Tatiana De La Torre, the company offers authentic, GIA-certified Muzo emeralds by appointment. Contact us at delatorre@emeraldsbytatiana.com or call +1 (307) 251-7072.',
        },
      },
      {
        '@type': 'Question',
        name: 'What makes Muzo emeralds special?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Muzo emeralds from Colombia are considered the finest in the world due to their exceptional color saturation, natural clarity, and unique geological origin. The Muzo mine in Boyacá, Colombia, has produced the most prized emeralds for over 500 years. These emeralds exhibit a distinctive deep green color with a slight bluish undertone that is unmatched by stones from any other origin.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do I verify if a Colombian emerald is authentic?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Authentic Colombian emeralds should come with certification from recognized gemological laboratories such as GIA (Gemological Institute of America). Key verification steps include: checking the certificate number against the lab database, examining the enhancement grade (F1 for minimal treatment, F2 for moderate, F3 for significant), and verifying the stated origin. At Emeralds by Tatiana De La Torre, every stone comes with full provenance documentation.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is emerald oil treatment and enhancement grading?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Emerald oil treatment is a widely accepted industry practice where natural oils (typically cedar oil) are applied to fill surface-reaching fissures in emeralds, enhancing clarity. Enhancement grades are: F1 (Minor) — minimal treatment, highest value; F2 (Moderate) — standard treatment, excellent value; F3 (Significant) — more treatment, most affordable. All grades represent genuine natural emeralds.',
        },
      },
      {
        '@type': 'Question',
        name: 'What colors do Colombian emeralds come in?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Colombian emeralds display a range of green hues: Deep Green (the most coveted, associated with Muzo mines), Vivid Green (intensely saturated with excellent brilliance), Bluish Green (emeralds with cool blue undertones, common from Chivor mines), and Yellowish Green (warm-toned stones with golden green hues). The most valuable are deep green with slight bluish undertones.',
        },
      },
      {
        '@type': 'Question',
        name: 'Does Emeralds by Tatiana De La Torre ship nationwide in the USA?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. While based in Colorado, Emeralds by Tatiana De La Torre serves clients across the entire United States. Consultations are available by appointment — either in person in Colorado or via phone/video call. All purchases include secure insured shipping nationwide.',
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
