# ipfs-camp 2022 - dEvent-website

ipfs-camp 2022 is a decentralized event series,
using this github repository and website to coordinate event listings.


## What is a decentralized event?

A decentralized event is a series of related events happening around
the same place and time, put on by a community. The goal is to enable people
and groups to host their own events, loosely coordinating with the rest of the
community.

## Users

### Add your Event

1. make a copy of `events/_template.toml` into `events/your-event.toml`
2. Edit the file to include all the details about your event.
3. File a pull-request in this repo, and respond to feedback.
4. The organizers will decide whether to merge & publish your event.


## Developers

### What is `dEvent-website`?

It is a boilerplate starter website you can use to organize your own decentralized event.
Just clone the https://github.com/jbenet/dEvent-website repo,
edit `devent.toml`, change the layout and style to meet your needs,
and publish.

### What's `dEvent-website` built with?

- Next.js
- React
- Tailwind CSS
- Flowbyte CSS

So go look in their docs & tutorials if you run into trouble.

### Developing & Publishing the website

Develop:
```
> cd website && npm run dev
```
Then visit: http://localhost:3000


Publish:
```
cd website
npm run build
npm run export
ipfs add -r out
```
