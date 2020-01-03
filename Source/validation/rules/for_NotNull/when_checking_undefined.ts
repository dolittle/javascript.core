// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { RuleContext } from '@dolittle/rules';
import { NotNull, Reasons } from '../index';
import '@dolittle/rules.testing';

describe('when checking undefined', () => {
    let rule = new NotNull();
    let context = new RuleContext(null);
    let value: any = undefined;

    rule.evaluate(context, value);

    it('should fail', () => context.should.failWith(rule, value, Reasons.ValueIsNull));
});