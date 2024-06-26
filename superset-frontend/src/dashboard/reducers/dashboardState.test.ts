/**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import dashboardStateReducer from './dashboardState';
import { setActiveTab, setActiveTabs } from '../actions/dashboardState';

describe('DashboardState reducer', () => {
  it('SET_ACTIVE_TAB', () => {
    expect(
      dashboardStateReducer({ activeTabs: [] }, setActiveTab('tab1')),
    ).toEqual({ activeTabs: ['tab1'] });
    expect(
      dashboardStateReducer({ activeTabs: ['tab1'] }, setActiveTab('tab1')),
    ).toEqual({ activeTabs: ['tab1'] });
    expect(
      dashboardStateReducer(
        { activeTabs: ['tab1'] },
        setActiveTab('tab2', 'tab1'),
      ),
    ).toEqual({ activeTabs: ['tab2'] });
  });
  it('SET_ACTIVE_TABS', () => {
    expect(
      dashboardStateReducer({ activeTabs: [] }, setActiveTabs(['tab1'])),
    ).toEqual({ activeTabs: ['tab1'] });
    expect(
      dashboardStateReducer(
        { activeTabs: ['tab1', 'tab2'] },
        setActiveTabs(['tab3', 'tab4']),
      ),
    ).toEqual({ activeTabs: ['tab3', 'tab4'] });
  });
});
