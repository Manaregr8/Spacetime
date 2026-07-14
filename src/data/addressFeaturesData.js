// Example data mapping for dynamic address features

const defaultImages = {
  spaces: [
    { src: "/homebannerImages/Enhance_office_modern_202604020034.webp", label: "Comfy Common Lounges" },
    { src: "/homebannerImages/remove_the_big_202604020018.webp", label: "Cafe" },
    { src: "/homebannerImages/create_a_office_202604020015.webp", label: "4 Meeting Rooms" },
    { src: "/homebannerImages/subtle_masterclass.webp", label: "Phone Booths" }
  ],
  breakfast: [
    "/homebannerImages/event1.webp",
    "/homebannerImages/event2.webp",
    "/homebannerImages/event3.webp"
  ]
};

export const addressFeaturesData = {
  default: {
    spacesData: {
      title: "Spaces for every kind of workday",
      items: [
        {
          title: "Complimentary meeting room hours",
          description: "Your meetings matter. With a Spacetime membership, you get complimentary hours that replenish each month, ensuring you always have the perfect space when it's time to connect."
        },
        {
          title: "Bookable Private Offices",
          description: "Need extra space to bring your team together, focus, or collaborate? Book a private office by the day—purposefully designed to support any kind of workday."
        },
        {
          title: "Book at any Spacetime location",
          description: "Traveling? With our network of prime locations, you can stay productive wherever your work takes you."
        }
      ],
      images: defaultImages.spaces
    },
    breakfastData: {
      title: "Endless Free Drinks. Curated Menu to Match.",
      description: "We take our food seriously. From early breakfast to late afternoon, grab what you need to stay fueled, focused, and doing your best work.",
      images: defaultImages.breakfast
    },
    moreSolutionsData: {
      virtualMembership: {
        title: "Virtual Membership",
        badge: "For individuals or companies",
        description: "Establish your business in a prime location with a professional mailing address, plus reliable mail retrieval — we'll receive your mail and have it ready whenever you need it. As a virtual member, you can also book meeting rooms at your home location at the member rate.",
        price: "From ₹2,999/mo",
        image: "/homebannerImages/Enhance_office_image_202604020030.webp"
      },
      highlightBanner: {
        title: "The best workplace provider, period.",
        bullets: [
          "A network of 200+ other locations around the world at your fingertips",
          "All-inclusive amenities",
          "Unparalleled hospitality"
        ]
      },
      videoBlock: {
        title: "No one does flex, coworking, or community like us.",
        description: "Spacetime meets you wherever you are in your professional journey, by design. Whether you're remote-first or office-first, our memberships are curated to help build chemistry with your community, and provide tools to help your business thrive.",
        thumbnail: "/homebannerImages/subtle_networking.webp"
      }
    },
    faqs: {
      "Location & Access": [
        {
          q: "What are the operating hours for this location?",
          a: "This location offers 24/7 access for all Private Office and Dedicated Desk members. Our community team is on-site Monday to Friday, 9:00 AM to 6:00 PM."
        },
        {
          q: "Is parking available on-site?",
          a: "Yes, we offer secure, reserved parking for members. Visitor parking is also available subject to availability."
        }
      ],
      "Amenities": [
        {
          q: "What amenities are specific to this location?",
          a: "Beyond our standard premium amenities, this location features a fully-stocked barista cafe, private phone booths, and a wellness room."
        }
      ]
    }
  }
};

export function getAddressFeatures(slug) {
  return addressFeaturesData[slug] || addressFeaturesData.default;
}
