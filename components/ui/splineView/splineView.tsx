import Spline from "@splinetool/react-spline"

interface splineViewprops {
  className?: string
}
export default function SplineView(props: splineViewprops) {
  return (
    <div className={props.className}>
      <Spline
        className="xl:max-h-auto flex min-h-max w-auto shrink"
        scene="https://prod.spline.design/fmNRvDbMadmfkZq1/scene.splinecode"
      />
    </div>
  )
}
