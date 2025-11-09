export const siteConfig = {
  name: "ReportViz",
  company: "Bivektor Inc.",
  contact: {
    address: "169 Madison Ave STE 38162<br/>New York, NY 10016",
  },
  links: {
    privacy: "/privacy-policy",
    terms: "/terms-of-service",
    pricing: "/pricing",
  },
} as const;

interface StripeConfig {
  sdkPaymentLink: string;
  supportTableId: string;
  supportTablePublishingKey: string;
}

export function getStripeConfig(): StripeConfig {
  return stripeConfig.test;
}

const stripeConfig = {
  test: {
      sdkPaymentLink: "https://buy.stripe.com/test_14k14g4fZ9dQ0gU6oo",
      supportTableId: "prctbl_1SRXmHFZadBQIVy9V8o8gd3f",
      supportTablePublishingKey: "pk_test_51RvK1wFZadBQIVy992V1glw005tG4GesJFlsGrF3YFZqFW8gc3WXuY1Prl31hn9s1pybCG1wt1vZXhowaMKzS5m300QTOhrC0T",
    },

    live: {
      sdkPaymentLink: "https://buy.stripe.com/3cIcN5ci502C1UPc2mbfO00",
      supportTableId: "prctbl_1SRY2jFZadBQIVy97dTysADC",
      supportTablePublishingKey: "pk_live_51RvK1wFZadBQIVy9Qt8LiV3Z2dpz9HytZi6JPrkFGLSd2FVrPaMQCLHyRDffPrdoAaxmuawzXCH3D9xAudJlpfvT00ulNJzt5k",
    }
}