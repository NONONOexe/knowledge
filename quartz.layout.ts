import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [
    Component.ConditionalRender({
      component: Component.RecentNotes({
        title: "新しいノート",
        limit: 5
      }),
      condition: (page) => page.fileData.slug == "index",
    }),
    Component.Comments({
      provider: "giscus",
      options: {
        repo: 'NONONOexe/knowledge',
        repoId: 'R_kgDOOvMowg',
        category: 'Announcements',
        categoryId: 'DIC_kwDOOvMows4CqsDf',
      }
    })
  ],
  footer: Component.Footer({
    links: {
      GitHub: "https://github.com/NONONOexe",
      Blog: "https://nononoexe.github.io/blog/",
      X: "https://x.com/NONONOexe",
      Facebook: "https://www.facebook.com/nononoexe",
      researchmap: "https://researchmap.jp/nononoexe",
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.ConditionalRender({
      component: Component.Breadcrumbs(),
      condition: (page) => page.fileData.slug !== "index",
    }),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
        { Component: Component.DesktopOnly(Component.ReaderMode()) },
      ],
    }),
    Component.Explorer(),
    Component.DesktopOnly(Component.PageCount()),
  ],
  right: [
    Component.Graph({
      globalGraph: {
        repelForce: 3.0,
        linkDistance: 100,
        fontSize: 0.8,
      }
    }),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
      ],
    }),
    Component.Explorer(),
  ],
  right: [],
}
