enum Status {
  success = 'success',
  error = 'error',
}

export interface Response<T> {
  content: T;
  status: Status;
}
