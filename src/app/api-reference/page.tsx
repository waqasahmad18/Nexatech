import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ApiReferenceHero from "@/components/api-reference/ApiReferenceHero";
import ApiEndpoints from "@/components/api-reference/ApiEndpoints";
import ApiPlayground from "@/components/api-reference/ApiPlayground";

export const metadata = {
  title: "API Reference - Complete REST API Documentation | NexaTech",
  description: "Complete API reference for NexaTech services. Explore all endpoints, request/response examples, authentication methods, and interactive API playground.",
};

export default function ApiReferencePage() {
  return (
    <>
      <Header />
      <ApiReferenceHero />
      <ApiEndpoints />
      <ApiPlayground />
      <Footer />
    </>
  );
}