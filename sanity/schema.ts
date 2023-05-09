import { type SchemaTypeDefinition } from "sanity";

import blockContent from "./schemas/blockContent";
import post from "./schemas/post";
import services from "./schemas/services";
import articles from "./schemas/articles";
import projects from "./schemas/projects";
import about from "./schemas/about";
import home from "./schemas/home";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post, blockContent, services, about, projects, articles, home],
};
