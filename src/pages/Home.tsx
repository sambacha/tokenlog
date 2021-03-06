import { FeaturedRepositories } from 'components/FeaturedRepositories';
import React from 'react';

export default function Home() {
  return (
    <>
      <div className="jumbotron p-5">
        <h1 className="display-5">Token-weighted backlogs</h1>
        <p className="lead">
          <span role="img" aria-label="Tokenlog">
            🗳️
          </span>{' '}
          Tokenlog is a governance tool to create token-weighted backlogs
        </p>
        <hr className="my-4" />
        <p>
          It allows projects to continuously gather feedback from their token holders in order to help plan and
          prioritize their work.​ It allows token holders to actively signal which items matter to them rather than just
          vote on single proposals.
        </p>
        <p className="lead">A better way for projects to collaborate with their biggest supporters.</p>
        <p className="mb-1">
          Access any Github repository at <code>tokenlog.xyz/&lt;org&gt;/&lt;repo&gt;</code> or read more{' '}
          <a href="https://github.com/wslyvh/tokenlog">Github</a>.
        </p>
      </div>

      <div>
        <h3>Featured Repositories</h3>
        <FeaturedRepositories />
      </div>
    </>
  );
}
