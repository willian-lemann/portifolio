/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `/app/studio/[[...index]]/page.tsx` route
 */

import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import {
  documentI18n,
  getDocumentList,
  getFilteredDocumentTypeListItems,
  withDocumentI18nPlugin,
} from "@sanity/document-internationalization";

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import { dataset, projectId } from "./sanity/env";
import { schema } from "./sanity/schema";

export default defineConfig({
  basePath: "/studio",
  projectId,
  dataset,
  schema,
  plugins: withDocumentI18nPlugin(
    (pluginConfig) => [
      deskTool({
        structure: (S, { schema }) =>
          getDocumentList({ S, schema, config: pluginConfig }),
      }),
    ],
    {
      includeDeskTool: false,
      // .. your i18n config, example:
      languages: ["en", "pt"],
    }
  ),
});
