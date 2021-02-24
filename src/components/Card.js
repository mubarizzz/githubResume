import React from 'react';
import { GithubContext } from '../context/context';
import styled from 'styled-components';
import { MdBusiness, MdLocationOn, MdLink } from 'react-icons/md';
const Card = () => {
  const { githubUser } = React.useContext(GithubContext);
  const {
    avatar_url,
    html_url,
    name,
    company,
    blog,
    bio,
    location,
    login,
  } = githubUser;

  return (
    <Wrapper>
      <header>
        <img src={avatar_url} alt={name} />
        <div>
          <h4>{name}</h4>
          <p>@{login || 'john_doe'}</p>
        </div>
        <a href={html_url}>follow</a>
      </header>
      <p className='bio'>{bio}</p>
      <div className='links'>
        <p>
          <MdBusiness></MdBusiness> {company}
        </p>
        <p>
          <MdLocationOn></MdLocationOn> {location || 'earth'}
        </p>
        <a href={`https://${blog}`}>
          <MdLink></MdLink>
          {blog}
        </a>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.article`
  background:  #e3e2df;
  padding: 1.5rem 2rem;
  border-top-right-radius: var(--radius);
  border-bottom-left-radius: var(--radius);
  border-bottom-right-radius: var(--radius);
  position: relative;
  &::before {
    content: 'user';
    position: absolute;
    top: 0;
    left: 0;
    transform: translateY(-100%);
    background:  #e3e2df;
    color: hsl(210, 22%, 49%);
    border-top-right-radius: var(--radius);
    border-top-left-radius: var(--radius);
    text-transform: capitalize;
    padding: 0.5rem 1rem 0 1rem;
    letter-spacing: var(--spacing);
    font-size: 1rem;
  }
  header {
    display: grid;
    grid-template-columns: auto 1fr auto;
    align-items: center;
    column-gap: 1rem;
    margin-bottom: 1rem;
    img {
      width: 75px;
      height: 75px;
      border-radius: 50%;
    }
    h4 {
      margin-bottom: 0.25rem;
      color: #5d001e;
    }
    p {
      margin-bottom: 0;
    }
    a {
      color: #5d001e;
      border: 1px solid #5d001e;
      padding: 0.25rem 0.75rem;
      border-radius: 1rem;
      text-transform: capitalize;
      letter-spacing: var(--spacing);
      transition: var(--transition);
      cursor: pointer;
      &:hover {
        background: #5d001e;
        color: white;
      }
    }
  }
  .bio {
    color: hsl(209, 34%, 30%);
  }
  .links {
    p,
    a {
      margin-bottom: 0.25rem;
      display: flex;
      align-items: center;
      svg {
        margin-right: 0.5rem;
        font-size: 1.3rem;
      }
    }
    a {
      color: #5d001e;
      transition: var(--transition);
      svg {
        color: #5d001e;
      }
      &:hover {
        color: #9a1750);
      }
    }
  }
`;
export default Card;
