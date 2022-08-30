# LabWeek 2022

A decentralized conference hosted by Protocol Labs. We are using this github repository and website to coordinate event listings. The website is published to:
- Staging: https://labweek-2022.vercel.app/

## LabWeek 2022 Location and Dates

LabWeek 2022 is happening October 24th to November 2nd, in Lisbon.

## Decentralized Event

A decentralized event is a series of related events happening around
the same place and time, put on by a community. The goal is to enable people
and groups to host their own events, loosely coordinating with the rest of the
community.

Anyone can submit new tracks or sessions!

## Submitting tracks or sessions

### Add a session to an existing track
Sessions can be run in many formats: roundtables, talks with slides, hack sessions, whiteboard sessions, or more. 

1. Go to `/events` and find the .toml file for that track.
2. Edit the file to include details of your proposed session.
3. Create a PR to this repo, and respond to feedback.
4. Respond to feedback from the track leader, who will decide whether to merge & publish your session.

### Add a new track
Tracks are a group of sessions with a common theme.

1. Make a copy of `events/_template-event.toml` or `events/_template-track.toml` into `events/your-event.toml`
2. Edit the file to include all the details about your event.
3. File a pull-request in this repo, and respond to feedback.
4. The organizers will decide whether to merge & publish your event.

### What venue do I put?

Leave it blank for now, we'll try to assign rooms closer to the event.

### CSV dump of talks

To get a dump of talks/speakers for custom analysis, you can:
1. Install the python version of yq: https://github.com/kislyuk/yq
  - ``brew install python-yq``
2. Run a command like ``tomlq -r '.name as $track_name | .date as $track_date | .timeslots[] | [$track_name, $track_date, .startTime, .title, (.speakers | join(" "))] | @csv' *.toml``

The above was gleaned from:
1. https://stackoverflow.com/a/71290386/16318
2. https://stackoverflow.com/a/32967407/16318
3. https://stackoverflow.com/a/38693695/16318

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
