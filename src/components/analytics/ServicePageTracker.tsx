"use client";

import { useEffect } from "react";
import { trackServicePageView } from "../../lib/analytics";

interface ServicePageTrackerProps {
  serviceSlug: string;
  serviceCategory: "cad" | "engineering" | "outsourcing";
  serviceName: string;
}

export default function ServicePageTracker({
  serviceSlug,
  serviceCategory,
  serviceName,
}: ServicePageTrackerProps) {
  useEffect(() => {
    trackServicePageView(serviceSlug, serviceCategory, serviceName);
  }, [serviceSlug, serviceCategory, serviceName]);

  return null;
}
