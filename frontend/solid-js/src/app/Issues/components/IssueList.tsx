import { For } from "solid-js";
import { IssueItem } from "~/app/Issues/components";

export const IssueList = () => {
  return (
    <div class="card border-white">
      <div class="card-header bg-dark">
        <ul class="nav nav-pills card-header-pills">
          <li class="nav-item">
            <a class="nav-link active">All</a>
          </li>
          <li class="nav-item">
            <a class="nav-link">Open</a>
          </li>
          <li class="nav-item">
            <a class="nav-link">Closed</a>
          </li>
        </ul>
      </div>
      <div class="card-body text-dark">
        <For each={[1, 2, 3]}>{() => <IssueItem />}</For>
      </div>
    </div>
  );
};
