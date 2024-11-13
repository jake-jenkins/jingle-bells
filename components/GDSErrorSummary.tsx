export default function GDSErrorSummary({
  props,
  errors,
}: {
  props: any;
  errors?: any;
}) {
  console.log(props);
  return (
    <>
      {errors ? (
        <div className="govuk-error-summary" data-module="govuk-error-summary">
          <div role="alert">
            <h2 className="govuk-error-summary__title">There is a problem</h2>
            <div className="govuk-error-summary__body">
              <ul className="govuk-list govuk-error-summary__list">
                <li>
                  <a href="#">Enter your full name</a>
                </li>
                <li>
                  <a href="#">
                    The date your passport was issued must be in the past
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
