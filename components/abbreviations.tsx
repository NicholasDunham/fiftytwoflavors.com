import { FC } from "react";

/* The word "carboxymethylcellulose" can cause ugly line breaks if not
 * hyphenated. */
export const CMC: FC = () => {
  return <span>car&shy;boxy&shy;meth&shy;yl&shy;cel&shy;lu&shy;lose</span>;
};
