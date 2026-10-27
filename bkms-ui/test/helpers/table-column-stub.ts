/*
 * TencentBlueKing is pleased to support the open source community by making
 * 蓝鲸智云 - 服务治理 (BlueKing Service Governance) available.
 * Copyright (C) Tencent. All rights reserved.
 * Licensed under the MIT License (the "License"); you may not use this file except
 * in compliance with the License. You may obtain a copy of the License at
 *
 *  http://opensource.org/licenses/MIT
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND,
 * either express or implied. See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * We undertake not to change the open source license (MIT license) applicable
 * to the current version of the project delivered to anyone in the future.
 */

import { Comment, defineComponent, h } from 'vue';

/** TableColumn stub：透传列插槽（供 TableStub 按行渲染），无插槽时输出注释节点占位 */
export const TableColumnStub = defineComponent({
  name: 'TableColumnStub',
  props: {
    field: { type: String, default: '' },
    label: { type: String, default: '' },
    type: { type: String, default: '' },
  },
  setup(_props, { slots }) {
    return () => (slots.default ? h('span', slots.default({ row: {}, rowIndex: 0 })) : h(Comment, ''));
  },
});
