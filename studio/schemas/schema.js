// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// PAGES
// DOCUMENTS
import project from "./documents/project";
// OBJECTS
import lighthouse from "./objects/lighthouse";
import links from "./objects/links";
import screenshot from "./objects/screenshot";
import thumbnail from "./objects/thumbnail";


// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */
    project,
    lighthouse,
    links,
    screenshot,
    thumbnail,
  ]),
})
