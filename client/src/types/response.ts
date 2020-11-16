enum Status {
  success = 'success',
  failure = 'failure',
}

export interface Response<T> {
  content: T;
  status: Status;
}
