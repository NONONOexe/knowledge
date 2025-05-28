import { QuartzComponentConstructor, QuartzComponentProps } from "./types"

function PageCount({ allFiles }: QuartzComponentProps) { // propsからallFilesを受け取るように変更
  const pageCount = allFiles.length

  return (
    <div class="page-count">
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
