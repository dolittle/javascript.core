// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { RuleContext } from '@dolittle/rules';
import '@dolittle/rules.testing';
import { LessThanOrEqual } from '../LessThanOrEqual';

describe('when checking value that is less than', () => {
    const rule = new LessThanOrEqual(42);
    const context = new RuleContext(null);
    const value = 41;

    rule.evaluate(context, value);

    it('should fail', () => context.should.notFail());
});
