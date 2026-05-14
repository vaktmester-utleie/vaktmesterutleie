import { StructureResolver } from 'sanity/structure'

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Innhald')
    .items([
      S.listItem()
        .title('Tenester')
        .child(S.documentTypeList('service').title('Tenester')),
      S.listItem()
        .title('Utleigekatalog')
        .child(
          S.list()
            .title('Utleigekatalog')
            .items([
              S.listItem()
                .title('Kategoriar')
                .child(S.documentTypeList('category').title('Kategoriar')),
              S.listItem()
                .title('Stillas og stiger')
                .child(
                  S.documentList()
                    .title('Stillas og stiger')
                    .filter(
                      '_type == "rental" && category->slug.current == "stillas-og-stiger"'
                    )
                ),
              S.listItem()
                .title('Tilhengar')
                .child(
                  S.documentList()
                    .title('Tilhengar')
                    .filter(
                      '_type == "rental" && category->slug.current == "tilhengar"'
                    )
                ),
              S.listItem()
                .title('Verktøy')
                .child(
                  S.documentList()
                    .title('Verktøy')
                    .filter(
                      '_type == "rental" && category->slug.current == "verktoy"'
                    )
                ),
            ])
        ),
      S.listItem()
        .title('Prosjekter')
        .child(S.documentTypeList('project').title('Prosjekter')),
    ])
