export const withQuery = (WrappedComponent) => function ({ isLoading, ...rest }) {
  if (isLoading) {
    return (
      <div className="catalog">
      </div>
    )
  }
  return <WrappedComponent {...rest} />
}
