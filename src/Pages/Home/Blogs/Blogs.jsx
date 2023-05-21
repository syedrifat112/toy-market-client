import React from "react";

const Blogs = () => {
  return (
    <div className="w-[90%] mx-auto">
      <div>
        <h1 className="font-bold text-xl">
          Q :What is an access token and refresh token? How do they work and
          where should we store them on the client-side?
        </h1>
        <p className="font-semibold">Ans:As mentioned, for security purposes, access tokens may be valid for a short amount of time. Once they expire, client applications can use a refresh token to "refresh" the access token. That is, a refresh token is a credential artifact that lets a client application get new access tokens without having to ask the user to log in again.</p>
      </div>
      <div>
        <h1 className="font-bold text-xl">
          Q:Compare SQL and NoSQL databases?
        </h1>
        <p className="font-semibold">Ans:SQL databases are vertically scalable, while NoSQL databases are horizontally scalable. SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores. </p>
      </div>
      <div>
        <h1 className="font-bold text-xl">
          Q:What is express js? What is Nest JS ?
        </h1>
        <p className="font-semibold">Ans:Express is a minimalist and flexible framework that is easy to use and has a large community of developers. NestJS, on the other hand, is a newer framework that provides additional features such as dependency injection</p>
      </div>
      <div>
        <h1 className="font-bold text-xl">
          Q:What is MongoDB aggregate and how does it work?
        </h1>
        <p className="font-semibold">Ans: Aggregation is a way of processing a large number of documents in a collection by means of passing them through different stages. </p>
      </div>
    </div>
  );
};

export default Blogs;
