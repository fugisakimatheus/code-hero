import React from 'react'

import Home from 'pages/home'

export type PageProps = {
  currentRoute: FeatureType
}

export type FeatureType = {
  id: string
  title: string
  path: string
  component?: React.FC
}

const features: FeatureType[] = [
  {
    id: 'home',
    title: 'home',
    path: '/',
    component: Home
  }
]

export default features
