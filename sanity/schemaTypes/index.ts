import { type SchemaTypeDefinition } from "sanity";
import { ServicePageType } from "./ServicePage";
import { blogPost } from "./BlogPost";
import { blockContent } from "./BlockContent";
import { Country } from "./Country";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [ServicePageType, blogPost, blockContent, Country],
};
