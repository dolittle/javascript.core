// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import sinon from 'sinon';
import { Specification } from '../Specification';

describe('when chaining specification with and', () => {
    let first_evaluator = sinon.stub();
    let second_evaluator = sinon.stub();
    let first_specification = Specification.when(first_evaluator);

    let result = first_specification.and(second_evaluator);

    it('should return an and operator', () => result.constructor.name.should.equal('And'));
    it('should pass along the first specification', () => result.left.should.equal(first_specification));
    it('should pass along the rule to the and operator', () => result.right.evaluator.should.equal(second_evaluator));
});