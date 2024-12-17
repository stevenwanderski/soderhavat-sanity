export const myStructure = (S) =>
S.list()
  .title('Content')
  .items([
    S.listItem()
      .title('Pages')
      .child(
        S.list()
          .title('Pages Content')
          .items([
            S.documentTypeListItem('page')
              .title('Page Builder'),

            S.listItem()
              .title('Home')
              .child(
                S.document()
                  .schemaType('homePage')
                  .documentId('homePage')
              ),
            S.listItem()
              .title('About')
              .child(
                S.document()
                  .schemaType('aboutPage')
                  .documentId('aboutPage')
              ),
          ])
      ),
      S.documentTypeListItem('caseStudy')
        .title('Case Studies')
    ])