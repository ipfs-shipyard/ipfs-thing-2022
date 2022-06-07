# ipfs-þing-2022 - implementors workshops

> þing (n.) thing, assembly, meeting, council. parliament.

A collaborative series of workshops for IPFS Implementors. Hosted at the Harpa in Iceland.
We are using this github repository and website to coordinate event listings.


## Decentralized Event

A decentralized event is a series of related events happening around
the same place and time, put on by a community. The goal is to enable people
and groups to host their own events, loosely coordinating with the rest of the
community.

Anyone can add events -- just do it.

## ipfs-þing-2022 venue

ipfs-þing-2022 is happening at [The Harpa](https://goo.gl/maps/qQkLYrFprPMvAFaj7)

## Users

### Add your Event

1. make a copy of `events/_template-event.toml` or `events/_template-track.toml` into `events/your-event.toml`
2. Edit the file to include all the details about your event.
3. File a pull-request in this repo, and respond to feedback.
4. The organizers will decide whether to merge & publish your event.

### What venue do I put?

Room allocations at the harpa are still TBD.
Leave it blank for now, we'll try to assign rooms closer to the event.

## Developers

### What is `devent-website`?

It is a boilerplate starter website you can use to organize your own decentralized event.
Just clone the https://github.com/jbenet/devent-website repo,
edit `devent.toml`, change the layout and style to meet your needs,
and publish.

### What's `devent-website` built with?

- Next.js
- React
- Tailwind CSS
- Flowbyte CSS

So go look in their docs & tutorials if you run into trouble.

### Developing & Publishing the website

Develop:
```
cd website && npm run dev
```
Then visit: http://localhost:3000


Publish:
```
cd website
npm run build
npm run export
ipfs add -r out
```

Publish to fleek:
- https://blog.fleek.co/posts/fleek-nextJS
