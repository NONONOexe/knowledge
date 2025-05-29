import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"

const PageCount: QuartzComponent = ({ displayClass, allFiles }: QuartzComponentProps) => {
  const pageCount = allFiles.length

  return (
    <div class={classNames(displayClass, "page-count")}>
      <p>全{pageCount}ページ</p>
    </div>
  )
}

PageCount.css = `
.page-count {
  padding: 0.5rem;
  font-size: 0.9rem;
  color: var(--secondary);
}
`

export default (() => PageCount) satisfies QuartzComponentConstructor
