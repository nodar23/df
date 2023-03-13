import { FidgetSpinner } from "react-loader-spinner";

export const withQuery = (WrappedComponent) => function ({ isLoading, ...rest }) {
  if (isLoading) {
    return (
      <div className="catalog">
        <FidgetSpinner
        visible={true}
        height="120"
        width="120"
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClass="dna-wrapper"
        ballColors={['#099d9d', '#000000', '#b16910']}
        backgroundColor="#fff700"
        />
      </div>
    )
  }
  return <WrappedComponent {...rest} />
}
