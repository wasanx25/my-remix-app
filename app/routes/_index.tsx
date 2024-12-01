import type {MetaFunction} from "@remix-run/node";
import {Link, useViewTransitionState} from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [{title: "New Remix App"}];
};

export default function Index() {
  const vt = useViewTransitionState('/test')

  return (
    <div>
      <Link to='/test' viewTransition style={{viewTransitionName: vt ? '' : ''}}>jump</Link>
    </div>
  );
}
