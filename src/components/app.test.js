import React from 'react';
import { getByTestId } from '@testing-library/jest-dom';
import App from './app';

const { loggedInStatus } = useLoggedInStatus({
  onReponse: () => setIsLoading(false)
})

mockUseLoggedInStatus(value) {
  const spyOnUsedLoggedInStatus = jest.spyOn(loggedInStatusHook);
  spyOnUsedLoggedInStatus.mockReturnValue(mockValue);
  return spyOnUsedLoggedInStatus;
}

it("Verify spinner", async () => {
  mockUseLoggedInStatus({ loggedInStatus: { signedIn: data, username: 'name', response sets loading false }})
  const { getByTestId } = renderWithRouter( <Profile value={user} />);
  expect...
  waitForElementToBeRemoved(() => getByTestId(DataTestIds.Spinner))
}

it("Verify user data", async () => {
  mockUseLoggedInStatus({ loggedInStatus: { signedIn: data, username: 'name'}})
  const { getByTestId } = renderWithRouter( <Profile />);
  expect...
}





  render(<Results></Results>)
  const results = {
    getProfile: () => {}
  }
  const { getByTestId } = renderWithRouter(
    <ProfileContext.Provider value={results}>
      <Profile />
    </ProfileContext.Provider>
  );
  expect(getByTestId('spinner')).toBeInTheDocument();
})

it("Verify app", async () => {

})
