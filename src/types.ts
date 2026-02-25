/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface LocalPlace {
  name: string;
  description: string;
  address?: string;
  phone?: string;
  hours?: string;
  link?: string;
}

export interface Section {
  id: string;
  title: string;
  icon: string;
}
