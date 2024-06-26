import { RouteRecordRaw } from "vue-router"
import { Component } from 'vue'

interface RouteRecordMeta {
  hidden?: boolean,
  icon?: Component,
  title?: string
}

// @ts-expect-error
export interface RouteRecord extends Omit<RouteRecordRaw, 'meta'> {
  name?: string,
  meta?: RouteRecordMeta,
  children?: RouteRecord[]
}