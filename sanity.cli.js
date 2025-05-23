/**
* This configuration file lets you run `$ sanity [command]` in this folder
* Go to https://www.sanity.io/docs/cli to learn more.
**/
import { dataset, projectId, studioHost } from '@/sanity/env';
import { defineCliConfig } from 'sanity/cli'
// import { dataset, projectId } from './src/sanity/env'

export default defineCliConfig({
  api: {
    projectId: projectId,
    dataset: dataset
  },
  studioHost: studioHost,
  project: {
    basePath: '/'
  }
});