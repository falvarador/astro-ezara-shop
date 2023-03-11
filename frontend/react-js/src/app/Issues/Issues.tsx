import { IssueList, LabelPicker } from "~/app/Issues/components";

export default function Issues() {
  return (
    <div className="row mt-5">
      <div className="col-8">
        <IssueList />
      </div>

      <div className="col-4">
        <LabelPicker />
      </div>
    </div>
  );
}
