const schemaData = {
    "@context": "https://schema.org",
    "@type": "TravelAgency", 
    name: "Al Nasr Travel",
    url: "https://www.website-hajiumroh.com",
    logo: "https://www.website-hajiumroh.com/logo.png",
    description: "Paket haji dan umroh terpercaya dengan layanan profesional di Padang.",
    address: {
        "@type": "PostalAddress",
        streetAddress: "Jl. Pemuda No. 12",
        addressLocality: "Padang",
        addressRegion: "Sumatera Barat",
        postalCode: "25111",
        addressCountry: "ID",
    },
    contactPoint: {
        "@type": "ContactPoint",
        telephone: "+62-751-123456",
        contactType: "customer service",
    },
};

// Menambahkan schema JSON-LD ke dalam head
const script = document.createElement("script");
script.type = "application/ld+json";
script.text = JSON.stringify(schemaData);
document.head.appendChild(script);
