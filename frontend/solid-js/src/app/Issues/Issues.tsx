import { IssueList, LabelPicker } from "~/app/Issues/components";

export default function ListView() {
  return (
    <div class="row mt-5">
      <div class="col-8">
        <IssueList />
      </div>

      <div class="col-4">
        <LabelPicker />
      </div>
    </div>
  );
}
