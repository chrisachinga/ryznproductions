
import React, { useState } from "react";
import PageLayout from "@/components/layout/PageLayout";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const DataPolicy = () => {
  const { toast } = useToast();
  const [analyticsConsent, setAnalyticsConsent] = useState(true);
  const [marketingConsent, setMarketingConsent] = useState(false);

  const savePreferences = () => {
    // In a real application, save these preferences to localStorage or backend
    localStorage.setItem('analyticsConsent', analyticsConsent.toString());
    localStorage.setItem('marketingConsent', marketingConsent.toString());
    
    toast({
      title: "Preferences saved",
      description: "Your data preferences have been updated successfully.",
    });
  };

  return (
    <PageLayout title="Data Policy">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">Data Policy & Privacy</h1>
        
        <div className="prose prose-lg dark:prose-invert max-w-none mb-10">
          <p>
            At Ryzn Production, we value your privacy and are committed to protecting your personal data. 
            This policy outlines how we collect, use, and safeguard your information when you interact with our services.
          </p>
        </div>

        <Accordion type="single" collapsible className="mb-10">
          <AccordionItem value="information-collected">
            <AccordionTrigger className="text-xl font-medium">Information We Collect</AccordionTrigger>
            <AccordionContent className="text-base space-y-4">
              <p>When you use our services, we may collect the following types of information:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Personal Information:</strong> Name, email address, phone number, and other contact details you provide when contacting us or booking our services.</li>
                <li><strong>Usage Data:</strong> Information about how you interact with our website, including pages visited, time spent, and actions taken.</li>
                <li><strong>Device Information:</strong> Browser type, IP address, device type, and operating system.</li>
                <li><strong>Photography/Videography Content:</strong> The images and videos we create for you during our services.</li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="information-usage">
            <AccordionTrigger className="text-xl font-medium">How We Use Your Information</AccordionTrigger>
            <AccordionContent className="text-base space-y-4">
              <p>We use the information we collect for various purposes, including:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Providing and improving our photography and videography services</li>
                <li>Communicating with you about your bookings or inquiries</li>
                <li>Sending you updates about our services (with your consent)</li>
                <li>Displaying your photos in our portfolio (with your explicit permission)</li>
                <li>Analyzing website performance and user experience</li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="information-sharing">
            <AccordionTrigger className="text-xl font-medium">Sharing Your Information</AccordionTrigger>
            <AccordionContent className="text-base space-y-4">
              <p>We do not sell or rent your personal information to third parties. We may share your information in the following circumstances:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>With service providers who help us operate our business</li>
                <li>With your consent, for portfolio or promotional purposes</li>
                <li>To comply with legal obligations</li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="data-security">
            <AccordionTrigger className="text-xl font-medium">Data Security</AccordionTrigger>
            <AccordionContent className="text-base space-y-4">
              <p>We implement appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. These measures include:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Secure storage of all digital files</li>
                <li>Limited access to personal information</li>
                <li>Regular security assessments</li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="your-rights">
            <AccordionTrigger className="text-xl font-medium">Your Rights</AccordionTrigger>
            <AccordionContent className="text-base space-y-4">
              <p>You have the right to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Access the personal information we hold about you</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your information</li>
                <li>Withdraw consent for marketing communications</li>
                <li>Object to the processing of your information</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 mb-10">
          <h2 className="text-2xl font-semibold mb-4">Your Privacy Preferences</h2>
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium">Analytics Cookies</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">Help us improve our website by collecting anonymous usage data</p>
              </div>
              <Switch 
                checked={analyticsConsent}
                onCheckedChange={setAnalyticsConsent}
              />
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium">Marketing Communications</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">Receive updates about our services and special offers</p>
              </div>
              <Switch 
                checked={marketingConsent}
                onCheckedChange={setMarketingConsent}
              />
            </div>

            <Button onClick={savePreferences} className="mt-4 w-full sm:w-auto">
              Save Preferences
            </Button>
          </div>
        </div>

        <div className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Contact Us About Your Data</h2>
          <p className="mb-4">
            If you have any questions about our data policy or would like to exercise your rights regarding your personal information, please contact us at:
          </p>
          <ul className="space-y-2">
            <li><strong>Email:</strong> wafulasimiyu2018@gmail.com</li>
            <li><strong>Phone:</strong> +254 718494355</li>
          </ul>
        </div>
      </div>
    </PageLayout>
  );
};

export default DataPolicy;
