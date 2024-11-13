export default function GDSTextarea({ props }: { props: any }) {
  return (
    <div className="govuk-form-group">
      <h1 className="govuk-label-wrapper">
        <label className="govuk-label govuk-label--l" htmlFor={props.id}>
          {props.label.en}
        </label>
      </h1>
      {props.hint ? (
        <div id="more-detail-hint" className="govuk-hint">
          {props.hint.en}
        </div>
      ) : null}
      <textarea
        className="govuk-textarea"
        id={props.id}
        name={props.id}
        rows={5}
        aria-describedby={`${props.label.en} hint`}
      />
    </div>
  );
}
