import { IconLink } from 'components/IconLink';
import { IssueList } from 'components/IssueList';
import { RepositoryInfo } from 'components/RepositoryInfo';
import React from 'react';
import { Link, useParams } from 'react-router-dom';

export default function Repository() {
  const { org, repo } = useParams();

  return (
    <>
      <div>
        <h2>{repo}</h2>
        <h3>
          <small>
            <Link to={`/${org}`}>{org}</Link>
          </small>
        </h3>

        <IconLink url={`/${org}/${repo}/settings`} icon="fas fa-cog" />

        <RepositoryInfo organization={org} repository={repo} />

        <IssueList organization={org} repository={repo} />
      </div>
    </>
  );
}