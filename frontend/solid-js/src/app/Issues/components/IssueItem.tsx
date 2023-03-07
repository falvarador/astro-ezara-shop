import { FiInfo, FiMessageSquare } from "solid-icons/fi";

export const IssueItem = () => {
  return (
    <div class="card mb-2 issue">
      <div class="card-body d-flex align-items-center">
        <FiInfo size={30} color="red" />

        <div class="d-flex flex-column flex-fill px-2">
          <span>
            Suggestion: why not make accessing and changing the state possible
            globally?
          </span>
          <span class="issue-subinfo">
            #25581 opened 2 days ago by <span class="fw-bold">segfaulty1</span>
          </span>
        </div>

        <div class="d-flex align-items-center">
          <img
            src="https://avatars.githubusercontent.com/u/1933404?v=4"
            alt="User Avatar"
            class="avatar"
          />
          <span class="px-2">2</span>
          <FiMessageSquare />
        </div>
      </div>
    </div>
  );
};
