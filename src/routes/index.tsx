import { createFileRoute } from "@tanstack/react-router";
import { Site } from "@/components/apex/site";

export const Route = createFileRoute("/")({ component: Site });
