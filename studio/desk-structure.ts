import { SanityDocument } from "@sanity/client";
import S from "@sanity/desk-tool/structure-builder";

import { BsInfoCircle, BsFillPhoneVibrateFill } from "react-icons/bs";
import { GiSkills } from "react-icons/gi";

export default () => S.list().title("Content").items([
  S.listItem().title("About Page").icon(BsInfoCircle).child(S.document().schemaType("about").documentId("about").title("About Page")),
  S.listItem().title("Skills Page").icon(GiSkills).child(S.document().schemaType("skills").documentId("skills").title("Skills Page")),
  S.listItem().title("Contact Page").icon(BsFillPhoneVibrateFill).child(S.document().schemaType("skills").documentId("skills").title("Skills Page")),
  S.divider(),
  ...S.documentTypeListItems().filter(
    (listItem) =>
      ![
        "about",
        "contact",
        "skills",
      ].includes(listItem.getId())
  ),
]);