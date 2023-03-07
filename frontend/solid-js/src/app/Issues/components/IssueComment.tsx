import SolidMarkdown from "solid-markdown";

type Props = {
  body: string;
};

export function IssueComment({ body }: Props) {
  return (
    <div class="col-12">
      <div class="card border-white mt-2">
        <div class="card-header bg-dark">
          <img
            src="https://avatars.githubusercontent.com/u/1933404?v=4"
            alt="User Avatar"
            class="avatar"
          />
          <span class="mx-2">Pandaiolo commented</span>
        </div>
        <div class="card-body text-dark">
          <SolidMarkdown children={body} />
        </div>
      </div>
    </div>
  );
}
